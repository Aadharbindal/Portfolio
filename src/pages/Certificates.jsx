import React, { useEffect, useRef } from 'react';
import './Certificates.css';

const certificatesList = [
  {
    id: 1,
    title: 'Cloud Infrastructure AI Foundation Associate',
    url: 'https://drive.google.com/file/d/11yrqwXhw90lbkP2gr2rDPrtx2f53uLTj/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Advanced Computer Networks',
    url: 'https://drive.google.com/file/d/14mja9sudu5DQFulDrFXn_f8j1ldVKFgZ/view?usp=sharing',
  },
  {
    id: 3,
    title: 'Web-Based Technologies and Multimedia Applications',
    url: 'https://drive.google.com/file/d/1QXV732gTqzMggub-0Oq_CaXNxM6ivZzR/view?usp=sharing',
  },
  {
    id: 4,
    title: 'Fundamentals of Investment',
    url: 'https://drive.google.com/file/d/1lrTNVMM2X70PqgouxpNebcqtRhgPZ1Cz/view?usp=sharing',
  },
];

const SPEED = 34; // pixels per second

const Frame = ({ cert, index, clone }) => (
  <article className="film-frame" {...(clone ? { 'aria-hidden': 'true' } : {})}>
    <div className="film-frame-header">
      <span className="film-frame-index">{String(index + 1).padStart(2, '0')}</span>
      <span className="film-frame-kind">CERTIFICATE</span>
    </div>

    <h3 className="film-frame-title">{cert.title}</h3>

    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      className="film-frame-link"
      tabIndex={clone ? -1 : undefined}
      draggable="false"
    >
      View certificate
    </a>
  </article>
);

const Certificates = () => {
  const viewportRef = useRef(null);
  const runRef = useRef(null);

  // Held in refs so the animation loop reads them without restarting.
  const hoveringRef = useRef(false);
  const draggingRef = useRef(false);
  const idleUntilRef = useRef(0);

  // Rewind by exactly one run once the reel passes it, in either direction.
  // Called from the roll loop and from manual scrolling alike, so dragging
  // past the end wraps the same way the roll does.
  const wrap = () => {
    const el = viewportRef.current;
    const runWidth = runRef.current ? runRef.current.offsetWidth : 0;
    if (!el || !runWidth) return;
    if (el.scrollLeft >= runWidth) el.scrollLeft -= runWidth;
    else if (el.scrollLeft <= 0) el.scrollLeft += runWidth;
  };

  // The reel advances by moving scrollLeft, so a visitor can scroll, drag or
  // step through it at any time and the roll simply carries on from there.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return undefined;

    let frame;
    let last = performance.now();

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      const held = hoveringRef.current || draggingRef.current || now < idleUntilRef.current;
      if (!held) el.scrollLeft += SPEED * dt;
      wrap();

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Manual scrolling or dragging holds the roll briefly, then it resumes.
  const holdBriefly = () => {
    idleUntilRef.current = performance.now() + 1500;
  };

  const onPointerDown = (e) => {
    const el = viewportRef.current;
    draggingRef.current = { startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture?.(e.pointerId);
    el.classList.add('is-dragging');
  };

  const onPointerMove = (e) => {
    const drag = draggingRef.current;
    if (!drag) return;
    const dx = e.clientX - drag.startX;
    if (Math.abs(dx) > 3) drag.moved = true;
    viewportRef.current.scrollLeft = drag.startScroll - dx;
  };

  const endDrag = (e) => {
    const el = viewportRef.current;
    if (!draggingRef.current) return;
    // A drag shouldn't also trigger the link underneath it.
    if (draggingRef.current.moved) {
      e.preventDefault?.();
    }
    draggingRef.current = false;
    el.classList.remove('is-dragging');
    holdBriefly();
  };

  return (
    <div className="page-section section-certificates">
      <div className="certificates-content">
        <h1 className="certificates-title">CERTIFICATES</h1>
        <p className="certificates-description">
          Certifications completed alongside my degree.
        </p>

        <div className="filmstrip">

          <div
            className="filmstrip-viewport"
            ref={viewportRef}
            onMouseEnter={() => { hoveringRef.current = true; }}
            onMouseLeave={() => { hoveringRef.current = false; endDrag({}); }}
            onScroll={wrap}
            onWheel={holdBriefly}
            onTouchStart={holdBriefly}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            {/* Two identical runs: when the reel passes the width of one run,
                scrollLeft rewinds by exactly that much, so the loop is seamless. */}
            <div className="filmstrip-reel">
              <div className="filmstrip-run" ref={runRef}>
                {certificatesList.map((cert, i) => (
                  <Frame cert={cert} index={i} key={cert.id} />
                ))}
              </div>
              <div className="filmstrip-run">
                {certificatesList.map((cert, i) => (
                  <Frame cert={cert} index={i} key={`clone-${cert.id}`} clone />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Certificates;

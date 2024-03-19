import React from "react";
import { useRef, useState } from 'react';
import "./canvas.css";

import { hsvaToHex } from '@uiw/color-convert';

const Canvas = ({selectedTool, drawColor, setDrawColor, hsva, drawWidth, setDrawWidth}) => {
  const canvasRef = useRef(null);
  // const [drawColor, setDrawColor] = useState('black');
  // const [drawWidth, setDrawWidth] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);
  // const [snap, newSnap] = useState(null);

  const startDrawing = (e) => {
    if (selectedTool === 'brush') {
      setIsDrawing(true);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      e.preventDefault();
    }
    if (selectedTool === 'shape') {
      setIsDrawing(true);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let preMouseX = e.clientX - canvas.offsetLeft;
      let preMouseY = e.clientY - canvas.offsetTop;
      ctx.beginPath();
      /* This not working?? */
      // ctx.strokeRect(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, preMouseX - (e.clientX-canvas.offsetLeft), preMouseY - (e.clientY-canvas.offsetTop));
      // let snapshot = ctx.getImageData(0,0,canvas.width,canvas.height);
      // newSnap(snapshot);
      e.preventDefault();
    }
  };

  const draw = (e) => {
    if (selectedTool === 'brush' && isDrawing) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.strokeStyle = hsvaToHex(hsva);
      ctx.lineWidth = drawWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    }
    if (selectedTool === 'shape' && isDrawing) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = hsvaToHex(hsva);
      ctx.rect(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.fill();
      ctx.stroke();
      // ctx.putImageData(snap,0,0);
    }
    e.preventDefault();
  };

  const stopDrawing = (e) => {
    if (selectedTool === 'brush' && isDrawing === true) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      // const img = ctx.getImageData(0, 0, canvas.height, canvas.width);
      // console.log(img);
      // ctx.putImageData(img, 260, 0);
      ctx.stroke();
      ctx.closePath();
      setIsDrawing(false);

      // once the drawing is false, we will use getImageData to snapshot/capture drawing elements 
      // and store it in array and index to call or putImage data to show in layer canvas
    }
    if (selectedTool === 'shape' && isDrawing === true) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.stroke();
      ctx.closePath();
      setIsDrawing(false);
    }
  };

  const handleMouseOut = () => {
    if (selectedTool === 'brush') {
      stopDrawing();
    }
    if (selectedTool === 'shape') {
      stopDrawing();
    }
  };

  function penDraw(e) {
    startDrawing(e);
    draw(e);
    stopDrawing(e);
    handleMouseOut();
  }

  return (
    <div className="canvas-window">
      <canvas
        ref={canvasRef}
        id="canvas"
        width={479}
        height={756}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={handleMouseOut}
      ></canvas>
    </div>
  );
};

export const penDraw = Canvas.penDraw;

export default Canvas;

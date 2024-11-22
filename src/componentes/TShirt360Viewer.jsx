import React, { useState, useRef } from "react";

const TShirt360Viewer = ({
  imageCount, // calcular quantas imagens tem na pasta da camiseta e passar como prop
  imagePath = "/src/images/", // passar como prop com a pasta da camiseta
  fileBaseName = "black", // nome base do arquivo da camiseta, mandar como prop
  width = 400,
  height = 400,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(13);
  const containerRef = useRef(null);

  // Helper porque a imagem é gerada com 4 dígitos, sendo que os primeiros são zeros
  const padIndex = (index, length) => {
    return index.toString().padStart(length, "0");
  };

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;

    const { offsetWidth, offsetLeft } = containerRef.current;
    const mouseX = event.pageX - offsetLeft;

    // Calcula qual imagem vai mostrar baseado na posição do mouse
    const percentage = mouseX / offsetWidth;
    const newIndex = Math.floor(percentage * imageCount) + 1;

    // Começa a mostrar a partir da 10ª imagem, porque as primeiras nao estao disponiveis (erro do Blender)
    const clampedIndex = Math.max(13, Math.min(imageCount, newIndex));
    setCurrentImageIndex(clampedIndex);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
        cursor: "grab",
      }}
    >
      <img
        src={`${imagePath}${fileBaseName}${padIndex(currentImageIndex, 4)}.png`}
        alt={`Camiseta ângulo ${currentImageIndex}`}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default TShirt360Viewer;
"use client";

import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import {
  HiOutlineHeart,
  HiOutlineEye,
  HiOutlineShare,
  HiOutlineCalendarDays,
  HiOutlineXMark,
  HiOutlineMagnifyingGlassPlus,
  HiOutlineMagnifyingGlassMinus,
  HiOutlineArrowPath,
} from "react-icons/hi2";

import CreativeDownloadActions from "../molecules/CreativeDownloadActions";
import CreativeComment from "../atoms/CreativeComment";

export default function CreativeModal({
  project,
  open,
  onClose,
}) {
  const MIN_ZOOM = 1;
  const INITIAL_ZOOM = 1.08;
  const MAX_ZOOM = 4;
  const ZOOM_STEP = 0.2;

  const [zoomScale, setZoomScale] =
    useState(INITIAL_ZOOM);

  const [loadedImageSrc, setLoadedImageSrc] =
    useState(null);

  useEffect(() => {
    const navbar =
      document.getElementById("main-navbar");

    if (open) {
      document.body.style.overflow =
        "hidden";

      if (navbar) {
        navbar.style.display = "none";
      }
    }

    return () => {
      document.body.style.overflow =
        "auto";

      if (navbar) {
        navbar.style.display = "block";
      }
    };
  }, [open]);

  const handleCloseModal = () => {
    setZoomScale(INITIAL_ZOOM);
    setLoadedImageSrc(null);
    onClose();
  };

  if (!open || !project) {
    return null;
  }

  const isImageLoading =
    loadedImageSrc !== project.image;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        bg-black/80
        backdrop-blur-md
        overflow-y-auto
      "
    >
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          p-4
          md:p-8
        "
      >
        <div
          className="
            relative
            w-full
            max-w-7xl
            overflow-hidden
            border
            border-border
            bg-card
            shadow-[var(--shadow)]
          "
        >
          {/* BOTÓN CERRAR */}

          <button
            onClick={handleCloseModal}
            className="
              absolute
              top-5
              right-5
              z-50
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-card/95
              border
              border-border
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-primary
              hover:text-primary
            "
          >
            <HiOutlineXMark size={22} />
          </button>

          {/* CONTENIDO */}

          <div
            className="
              grid
              lg:grid-cols-[1.35fr_0.65fr]
            "
          >
            {/* IMAGEN */}

            <div
              className="
                relative
                flex
                items-center
                justify-center
                bg-background
                min-h-[700px]
                p-4
              "
            >
              <TransformWrapper
                key={`${project.title}-${project.image}`}
                initialScale={INITIAL_ZOOM}
                minScale={MIN_ZOOM}
                maxScale={MAX_ZOOM}
                wheel={{ disabled: true }}
                doubleClick={{ disabled: true }}
                pinch={{ disabled: true }}
                panning={{ disabled: false }}
                centerOnInit={true}
                limitToBounds={true}
              >
                {({ zoomIn, zoomOut, resetTransform }) => {
                  const isMaxZoom =
                    zoomScale >= MAX_ZOOM;

                  const isMinZoom =
                    zoomScale <= MIN_ZOOM;

                  const handleZoomIn = () => {
                    if (isMaxZoom) {
                      return;
                    }

                    zoomIn(ZOOM_STEP);

                    setZoomScale((prev) =>
                      Math.min(
                        MAX_ZOOM,
                        Number(
                          (prev + ZOOM_STEP).toFixed(2)
                        )
                      )
                    );
                  };

                  const handleZoomOut = () => {
                    if (isMinZoom) {
                      return;
                    }

                    zoomOut(ZOOM_STEP);

                    setZoomScale((prev) =>
                      Math.max(
                        MIN_ZOOM,
                        Number(
                          (prev - ZOOM_STEP).toFixed(2)
                        )
                      )
                    );
                  };

                  const handleReset = () => {
                    resetTransform();
                    setZoomScale(INITIAL_ZOOM);
                  };

                  return (
                    <>
                      <div
                        className="
                          absolute
                          top-5
                          left-5
                          z-40
                          flex
                          gap-2
                        "
                      >
                        <button
                          onClick={handleZoomIn}
                          disabled={isMaxZoom}
                          title={
                            isMaxZoom
                              ? "Límite máximo de zoom"
                              : "Acercar imagen"
                          }
                          aria-label="Acercar imagen"
                          className={`
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-card/95
                            border
                            border-border
                            backdrop-blur-xl
                            shadow-sm
                            transition-all
                            duration-300
                            ${
                              isMaxZoom
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:border-primary hover:text-primary hover:scale-105"
                            }
                          `}
                        >
                          <HiOutlineMagnifyingGlassPlus
                            size={22}
                          />
                        </button>

                        <button
                          onClick={handleZoomOut}
                          disabled={isMinZoom}
                          title={
                            isMinZoom
                              ? "Límite mínimo de zoom"
                              : "Alejar imagen"
                          }
                          aria-label="Alejar imagen"
                          className={`
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-card/95
                            border
                            border-border
                            backdrop-blur-xl
                            shadow-sm
                            transition-all
                            duration-300
                            ${
                              isMinZoom
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:border-primary hover:text-primary hover:scale-105"
                            }
                          `}
                        >
                          <HiOutlineMagnifyingGlassMinus
                            size={22}
                          />
                        </button>

                        <button
                          onClick={handleReset}
                          title="Restablecer imagen"
                          aria-label="Restablecer imagen"
                          className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-card/95
                            border
                            border-border
                            backdrop-blur-xl
                            shadow-sm
                            transition-all
                            duration-300
                            hover:border-primary
                            hover:text-primary
                            hover:scale-105
                          "
                        >
                          <HiOutlineArrowPath size={21} />
                        </button>
                      </div>

                      <div
                        className="
                          absolute
                          bottom-5
                          left-5
                          z-40
                          flex
                          items-center
                          gap-2
                          rounded-full
                          bg-black/70
                          px-4
                          py-2
                          text-sm
                          text-white
                          backdrop-blur-md
                        "
                      >
                        <HiOutlineMagnifyingGlassPlus />
                        Zoom manual
                      </div>

                      {isImageLoading && (
                        <div
                          className="
                            absolute
                            inset-0
                            z-30
                            flex
                            items-center
                            justify-center
                            bg-background
                          "
                        >
                          <div
                            className="
                              flex
                              flex-col
                              items-center
                              gap-4
                              text-sm
                              text-muted
                            "
                          >
                            <div
                              className="
                                h-10
                                w-10
                                animate-spin
                                rounded-full
                                border-2
                                border-border
                                border-t-primary
                              "
                            />

                            <span>Cargando imagen...</span>
                          </div>
                        </div>
                      )}

                      <TransformComponent
                        wrapperClass="w-full h-full"
                        contentClass="flex items-center justify-center"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          draggable={false}
                          onLoad={() =>
                            setLoadedImageSrc(project.image)
                          }
                          onError={() =>
                            setLoadedImageSrc(project.image)
                          }
                          className={`
                            max-h-[92vh]
                            max-w-full
                            h-auto
                            w-auto
                            object-contain
                            select-none
                            cursor-grab
                            active:cursor-grabbing
                            transition-opacity
                            duration-500
                            ${
                              isImageLoading
                                ? "opacity-0"
                                : "opacity-100"
                            }
                          `}
                        />
                      </TransformComponent>
                    </>
                  );
                }}
              </TransformWrapper>
            </div>

            {/* PANEL DERECHO */}

            <div
              className="
                border-l
                border-border
                p-8
                lg:p-10
              "
            >
              <h2
                className="
                  text-3xl
                  font-black
                  md:text-4xl
                "
              >
                {project.title}
              </h2>

              <p
                className="
                  mt-6
                  leading-8
                  text-muted
                "
              >
                {project.description}
              </p>

              {/* INFO */}

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-5
                  text-sm
                  text-muted
                "
              >
                <span
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <HiOutlineCalendarDays />
                  {project.date}
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <HiOutlineHeart />
                  {project.likes}
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <HiOutlineEye />
                  {project.views}
                </span>

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    transition-all
                    hover:text-primary
                  "
                >
                  <HiOutlineShare />
                  Compartir
                </button>
              </div>

              {/* ACCIONES */}

              <div className="mt-10">
                <CreativeDownloadActions
                  type={project.type}
                  price={project.price}
                />
              </div>

              {/* COMENTARIOS */}

              <div className="mt-14">
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Comentarios
                </h3>

                <textarea
                  placeholder="Escribe un comentario..."
                  className="
                    mt-5
                    min-h-[120px]
                    w-full
                    rounded-2xl
                    border
                    border-border
                    bg-background
                    p-4
                    outline-none
                  "
                />

                <button
                  className="
                    mt-4
                    rounded-2xl
                    bg-primary
                    px-6
                    py-3
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  Publicar Comentario
                </button>

                <div
                  className="
                    mt-8
                    space-y-4
                  "
                >
                  <CreativeComment
                    author="Carlos"
                    date="Hace 2 días"
                    comment="Excelente diseño, muy profesional."
                  />

                  <CreativeComment
                    author="María"
                    date="Hace 1 semana"
                    comment="Me gustó mucho la composición visual."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
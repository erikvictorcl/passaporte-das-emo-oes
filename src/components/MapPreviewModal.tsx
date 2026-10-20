import React from 'react';
import { X, ZoomIn, Check, BookOpen, ExternalLink } from 'lucide-react';
import { MindMapItem } from '../types';

interface MapPreviewModalProps {
  map: MindMapItem | null;
  onClose: () => void;
  onSelectPlan?: () => void;
}

export const MapPreviewModal: React.FC<MapPreviewModalProps> = ({ map, onClose, onSelectPlan }) => {
  if (!map) return null;

  return (
    <div 
      id="map-preview-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#1E2530]/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="map-preview-modal-dialog"
        className="bg-[#FAF6EE] rounded-2xl max-w-3xl sm:max-w-4xl w-full border border-[#D0BEA2] shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#FAF6EE] border-b border-[#D0BEA2] px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#A31D36] bg-[#FCEBED] px-2.5 py-0.5 rounded border border-[#F7C2CC]">
              {map.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#1E2530] mt-1">
              {map.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FCEBED] text-[#5A6578] hover:text-[#1E2530] transition-colors cursor-pointer"
            aria-label="Fechar pré-visualização"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Visual Mockup Sheet */}
        <div className="p-4 sm:p-6 bg-[#FAF7F2]/70 max-h-[85vh] overflow-y-auto">
          <div className="bg-[#FAF7F2] rounded-xl border border-[#E5DACB] p-4 sm:p-6 shadow-sm">
            {/* Sheet header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DACB]/40">
              <div className="text-xs font-semibold text-[#781428] flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Área: {map.authorOrSchool}</span>
              </div>
              <span className="text-[10px] text-[#A31D36] bg-[#FCEBED] px-2 py-0.5 rounded">
                Formato HD Original
              </span>
            </div>

            {/* Mind map scheme representation */}
            {map.previewUrl ? (
              <div className="py-3 flex flex-col items-center">
                <div className="w-full max-w-[480px] sm:max-w-[560px] rounded-lg overflow-hidden border border-[#E5DACB] shadow-sm bg-[#FAF7F2] flex items-center justify-center aspect-[1491/1055]">
                  <img 
                    src={map.previewUrl} 
                    alt={`Passaporte das Emoções ${map.title}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Branches Pill tags */}
                <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                  {map.branches.map((branch, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 bg-[#FAF8F5] text-[#781428] font-medium text-xs rounded-md border border-[#FCE8EC]"
                    >
                      {branch}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-6 flex flex-col items-center">
                <div className="bg-[#781428] text-white px-5 py-2.5 rounded-xl shadow-md border border-[#A31D36] text-center max-w-xs">
                  <span className="text-[10px] font-semibold text-[#F0BDC7] uppercase tracking-wider block">
                    Emoção Central
                  </span>
                  <span className="text-sm font-bold block mt-0.5">
                    {map.title}
                  </span>
                </div>

                {/* Connector lines */}
                <div className="h-4 w-0.5 bg-[#F0BDC7] my-1" />
                <div className="h-0.5 w-48 bg-[#F0BDC7] mb-3" />

                {/* Subnodes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
                  {map.branches.map((branch, idx) => (
                    <div 
                      key={idx} 
                      className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#FCE8EC] text-center"
                    >
                      <span className="text-[9px] text-[#A31D36] font-bold block uppercase">
                        Etapa {idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-[#1E2530] mt-0.5 block">
                        {branch}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="text-xs text-[#5A6578] border-t border-[#FAF8F5] pt-3 leading-relaxed">
              <strong className="text-[#1E2530]">Objetivo terapêutico:</strong> {map.description}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF8F5] border-t border-[#FCE8EC] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#5A6578]">
            Coleção completa com mais de 200 emoções apresentadas de forma leve e criativa.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#5A6578] hover:text-[#1E2530]"
            >
              Fechar
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectPlan?.();
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#781428] hover:bg-[#560D1B] text-white text-xs font-bold rounded-lg shadow-sm"
            >
              Acessar Coleção
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

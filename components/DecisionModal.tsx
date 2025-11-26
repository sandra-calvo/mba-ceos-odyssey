import React from 'react';
import type { Scenario, Option } from '../types';

interface DecisionModalProps {
    isOpen: boolean;
    scenario: Scenario;
    onClose: () => void;
    onSelectOption: (option: Option) => void;
    outcome: string | null;
    isLoading: boolean;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center space-x-2">
        <div className="w-4 h-4 bg-white animate-pulse rounded-full"></div>
        <div className="w-4 h-4 bg-white animate-pulse rounded-full" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-4 h-4 bg-white animate-pulse rounded-full" style={{ animationDelay: '0.4s' }}></div>
        <span>Consulting the board...</span>
    </div>
);


export const DecisionModal: React.FC<DecisionModalProps> = ({ isOpen, scenario, onClose, onSelectOption, outcome, isLoading }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-4xl bg-[#1e223b] text-white border-4 border-white p-6 shadow-lg max-h-[90vh] overflow-y-auto flex flex-col">
                <h2 className="text-xl md:text-2xl mb-4 text-yellow-400 sticky top-0 bg-[#1e223b] pb-2 border-b-2 border-white/20 z-10">{`MEMO: ${scenario.title}`}</h2>
                
                {outcome ? (
                    <div className="space-y-4 flex-1">
                        <p className="text-sm md:text-lg leading-relaxed">{outcome}</p>
                        <button 
                            onClick={onClose}
                            className="w-full mt-4 bg-green-500 text-gray-900 px-6 py-3 border-2 border-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-bold"
                        >
                            Continue...
                        </button>
                    </div>
                ) : isLoading ? (
                    <div className="min-h-[200px] flex items-center justify-center">
                       <LoadingSpinner />
                    </div>
                ) : (
                    <div className="space-y-4 flex-1">
                        <p className="text-sm md:text-lg leading-relaxed">{scenario.prompt}</p>
                        <div className="pt-2 space-y-3">
                            {scenario.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => onSelectOption(option)}
                                    className="block w-full text-left bg-transparent hover:bg-yellow-400 hover:text-black p-3 md:p-4 border-2 border-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-200 text-xs md:text-base"
                                >
                                    {`> ${option.text}`}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
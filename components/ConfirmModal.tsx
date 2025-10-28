"use client";

import React from "react";

interface ConfirmModalProps {
  open: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ open, message, onConfirm, onCancel }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-6 w-80 text-center border border-gray-700 shadow-lg">
        <p className="mb-6 text-gray-100">{message}</p>
        <div className="flex justify-between gap-4">
          <button
            onClick={onCancel}
            className="flex-1 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition text-white"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2 bg-red-600 rounded-lg hover:bg-red-500 transition text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

// src/components/FileManagement.js
import React from 'react';
import * as XLSX from 'xlsx';
import './FileManagement.css'; // Import all named exports as XLSX

const FileManagement = ({ transcriptions }) => {
  const handleExportToExcel = () => {
    const data = transcriptions.map((transcription, index) => {
      // Split the transcription into three parts: Name, Location, and Amount
      const parts = transcription.split(' ');
      const name = parts[0] || ''; // Default to empty string if part is undefined
      const location = parts[1] || '';
      const amount = parts[2] || '';
      
      return {
        'Name': name,
        'Location': location,
        'Amount': amount,
      };
    });

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Transcriptions');
    XLSX.writeFile(wb, 'transcriptions.xlsx');
  };

  return (
    
    <div className="file-management-container">
    <h2 className="file-management-title">File Management</h2>
    <button className="file-management-button" onClick={handleExportToExcel}>Export to Excel</button>
  </div>
  );
};

export default FileManagement;



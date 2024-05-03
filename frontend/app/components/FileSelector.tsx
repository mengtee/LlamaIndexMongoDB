"use client"

import axios from 'axios';
import React, { useState, useEffect } from 'react';

interface FileSelectorProps {
  backendUrl: string;
}

const FileSelector: React.FC<FileSelectorProps> = ({ backendUrl }) => {
    const [selectedFile, setSelectedFile] = useState('');
    const [files, setFiles] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchFiles = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${backendUrl}/files/`);
                setFiles(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch files:', error);
                setIsLoading(false);
                alert('Failed to load files');
            }
        };

        fetchFiles();
    }, [backendUrl]);

    const handleFileChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFile(event.target.value);
    };

    const handleFileSubmit = async () => {
        if (!selectedFile) {
            setModalMessage("Please select a file first!");
            setShowModal(true);
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await axios.post(`${backendUrl}/process-file/`, { file_name: selectedFile });
            setModalMessage(`File processed: ${selectedFile}\nResponse: ${response.data.message}`);
            setIsSubmitting(false);
            setShowModal(true);
        } catch (error) {
            console.error('Error processing file:', error);
            setModalMessage('Failed to process file');
            setIsSubmitting(false);
            setShowModal(true);
        }
    };

    const closeModal = () => setShowModal(false);

    return (
        <div className="font-mono-4 flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="file-selector" className="block text-sm font-medium text-gray-700">
              Select a file:
            </label>
            <div className="mt-1 relative">
              <select
                id="file-selector"
                onChange={handleFileChange}
                value={selectedFile}
                className="block appearance-none w-full bg-white border border-gray-300 text-base py-2 pl-3 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                disabled={isSubmitting}
              >
                <option value="">Select a file</option>
                {isLoading? (
                  <option>Loading files...</option>
                ) : (
                  files.map((file, index) => (
                    <option key={index} value={file}>
                      {file}
                    </option>
                  ))
                )}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <button
              className="mt-2 inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleFileSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting? 'Processing...' : 'Process File'}
            </button>
          </div>
          {showModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-auto">
              <div className="bg-white rounded-lg p-3 shadow-lg max-w-md w-full">
                <h2 className="text-lg font-bold text-gray-900">Processing Result</h2>
                <p className="text-gray-700 mb-4">{modalMessage}</p>
                <div className="flex justify-center">
                  <button
                    onClick={closeModal}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
};

export default FileSelector;

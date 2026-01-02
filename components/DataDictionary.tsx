interface Column {
  name: string;
  description: string;
  unit?: string;
  dataType: string;
}

interface DataDictionaryProps {
  columns: Column[];
  updateFrequency?: string;
}

export default function DataDictionary({ columns, updateFrequency }: DataDictionaryProps) {
  if (!columns || columns.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border border-gray-200 rounded my-8">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-light text-gray-900 flex items-center gap-2">
          📋 Data Dictionary
          {updateFrequency && (
            <span className="text-xs font-medium text-gray-600">
              Updated {updateFrequency}
            </span>
          )}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left font-medium text-gray-700">Column</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Description</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Unit</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Type</th>
            </tr>
          </thead>
          <tbody>
            {columns.map((col, idx) => (
              <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-3 font-mono text-blue-600">{col.name}</td>
                <td className="px-6 py-3 text-gray-700">{col.description}</td>
                <td className="px-6 py-3 text-gray-600">{col.unit || '—'}</td>
                <td className="px-6 py-3 text-gray-600 text-xs">{col.dataType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

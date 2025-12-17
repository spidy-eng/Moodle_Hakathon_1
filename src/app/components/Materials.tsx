import { BookOpen, FileText, Video, Download, Eye, Upload } from 'lucide-react';

interface MaterialsProps {
  role: 'student' | 'teacher';
}

export default function Materials({ role }: MaterialsProps) {
  const subjects = [
    {
      name: 'Data Structures',
      color: 'bg-blue-500',
      materials: [
        { type: 'pdf', name: 'Lecture Notes - Binary Trees', size: '2.4 MB', date: 'Dec 15' },
        { type: 'pdf', name: 'Assignment Sheet - Week 12', size: '850 KB', date: 'Dec 14' },
        { type: 'video', name: 'Tutorial - Graph Algorithms', size: '45 MB', date: 'Dec 13' },
        { type: 'ppt', name: 'Slides - Sorting Algorithms', size: '3.2 MB', date: 'Dec 10' },
      ],
    },
    {
      name: 'Database Systems',
      color: 'bg-purple-500',
      materials: [
        { type: 'pdf', name: 'Database Normalization Guide', size: '1.8 MB', date: 'Dec 16' },
        { type: 'video', name: 'SQL Query Workshop', size: '38 MB', date: 'Dec 15' },
        { type: 'ppt', name: 'ER Diagrams Presentation', size: '2.1 MB', date: 'Dec 12' },
      ],
    },
    {
      name: 'Web Development',
      color: 'bg-green-500',
      materials: [
        { type: 'pdf', name: 'React Hooks Documentation', size: '1.2 MB', date: 'Dec 17' },
        { type: 'video', name: 'Building REST APIs', size: '52 MB', date: 'Dec 14' },
        { type: 'pdf', name: 'CSS Grid & Flexbox Guide', size: '980 KB', date: 'Dec 11' },
      ],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'ppt':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'bg-red-100 text-red-600';
      case 'video':
        return 'bg-purple-100 text-purple-600';
      case 'ppt':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900 mb-2">Study Materials</h1>
            <p className="text-gray-600">Access all your course materials in one place</p>
          </div>
          {role === 'teacher' && (
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
              <Upload className="w-5 h-5" />
              Upload Material
            </button>
          )}
        </div>
      </div>

      {/* Materials by Subject */}
      <div className="space-y-6">
        {subjects.map((subject, subjectIndex) => (
          <div key={subjectIndex} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className={`${subject.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl text-gray-900">{subject.name}</h2>
                <p className="text-sm text-gray-600">{subject.materials.length} materials available</p>
              </div>
            </div>

            <div className="space-y-3">
              {subject.materials.map((material, materialIndex) => (
                <div
                  key={materialIndex}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-indigo-200 transition-colors"
                >
                  <div className={`${getTypeColor(material.type)} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {getIcon(material.type)}
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-900">{material.name}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                      <span>{material.size}</span>
                      <span>•</span>
                      <span>Uploaded {material.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                    <button className="flex items-center gap-1 px-3 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Downloads */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl text-gray-900 mb-4">Recent Downloads</h2>
        <div className="space-y-3">
          {subjects[0].materials.slice(0, 3).map((material, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className={`${getTypeColor(material.type)} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`}>
                {getIcon(material.type)}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">{material.name}</p>
                <p className="text-xs text-gray-600 mt-1">Downloaded {material.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

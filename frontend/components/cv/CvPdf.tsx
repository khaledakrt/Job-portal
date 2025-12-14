// components/cv/CvPdf.tsx
import React from "react";
import { User } from "../../types/user";

type Props = {
  user: User;
};

const CvPdf = React.forwardRef<HTMLDivElement, Props>(({ user }, ref) => {
  return (
    <div
      ref={ref}
      id="cv-pdf"
      className="w-[794px] min-h-[1123px] bg-white p-10 text-gray-800 font-sans"
    >
      {/* HEADER */}
      <div className="border-b pb-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">{user.name} {user.last_name}</h1>
          {user.summary && <p className="mt-2">{user.summary}</p>}
          <p className="text-sm text-gray-600">
            Date de naissance : {user.birthDate}
          </p>
        </div>
      </div>

      {/* LANGUES + COMPÉTENCES */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Langues</h2>
          <ul className="list-disc list-inside text-sm">
            {(user.languages ?? []).map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Compétences</h2>
          <ul className="list-disc list-inside text-sm">
            {(user.skills ?? []).map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* DIPLÔMES */}
      <h2 className="text-lg font-semibold mb-3">Diplômes</h2>
      {(user.diplomas ?? []).map((d, i) => (
        <div key={i} className="mb-3">
          <p className="font-medium">{d.level}</p>
          <p className="text-sm text-gray-600">
            {d.university} — {d.year}
          </p>
        </div>
      ))}

      {/* EXPÉRIENCES */}
      <h2 className="text-lg font-semibold mt-6 mb-3">
        Expériences professionnelles
      </h2>
      {(user.experiences ?? []).map((exp, i) => (
        <div key={i} className="mb-5">
          <div className="flex justify-between">
            <p className="font-medium">{exp.title} | {exp.company}</p>
            <p className="text-sm text-gray-600">{exp.startDate} — {exp.endDate}</p>
          </div>
          <ul className="list-disc list-inside mt-2 text-sm">
            {exp.description
              ?.split("-")
              .filter(Boolean)
              .map((line, j) => (
                <li key={j}>{line.trim()}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
});

export default CvPdf;

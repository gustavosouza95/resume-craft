import { useMemo } from "react";
import { Ditto } from "./ditto";
import { Eevee } from "./eevee";
import { Jynx } from "./jynx";
import { Onix } from "./onix";

export type BaseResumeProps = {
  data: ResumeData;
};

type ResumeTemplateProps = {
  data: ResumeData;
};

const templateMap: Record<ResumeTemplates, React.FC<BaseResumeProps>> = {
  ditto: Ditto,
  eevee: Eevee,
  jynx: Jynx,
  onix: Onix,
};

export const ResumeTemplate = ({ data }: ResumeTemplateProps) => {
  const template = data.structure.template;

  const Resume = useMemo(() => {
    return templateMap[template];
  }, [template]);
  return (
    <div
      id="resume-content"
      className="w-[210mm] min-h-[297mm] bg-white text-black font-arial [&hr]:border-black"
    >
      <Resume data={data} />
    </div>
  );
};

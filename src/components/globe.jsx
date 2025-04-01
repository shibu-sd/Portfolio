import IconCloud from "./ui/icon-cloud";

const slugs = [
  "cplusplus",
  "python",
  "javascript",
  "typescript",
  "html5",
  "css3",
  "react",
  "redux",
  "tailwindcss",
  "nodedotjs",
  "express",
  "postgresql",
  "mongodb",
  "fastapi",
  "microsoftexcel",
  "numpy",
  "pandas",
  "scikitlearn",
  "tensorflow",
  "visualstudiocode",
  "git",
  "github",
  "linux",
  "docker",
  "linux",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;

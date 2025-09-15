const Project = ({
  title,
  description,
  technologies,
  image,
  tags,
  liveLink,
  githubLink,
}) => {
  console.log(tags);

  return (
    <>
      <div>
        <p className="text-2xl">{title}</p>

        <div className="flex-wrap items-center py-10 justify-between space-y-14 md:flex sm:flex sm:space-y-0">
          <div className="flex gap-5 mt-2 text-[#ff9008]">
            {(tags || []).map((tag) => (
              <span key={tag.id}>{tag.id}</span>
            ))}
          </div>
          <button className="flex items-center gap-1 cursor-pointer hover-animation">
            Read more
            <img src="assets/arrow-right.svg" alt="" className="w-5" />
          </button>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      </div>
    </>
  );
};

export default Project;

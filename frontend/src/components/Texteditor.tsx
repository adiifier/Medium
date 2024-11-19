export const Texteditor = ({
  SetContent,
}: {
  content: string;
  SetContent: any;
}) => {
  return (
    <div className="h-full w-full mt-10 p-5">
      <textarea
        onChange={(e) => {
          SetContent(e.target.value);
        }}
        placeholder="Content"
        className="p-15 pt-25 h-full w-full focus:outline-none text-lg placeholder-gray-400 placeholder-gray-400 placeholder:text-4xl"
      ></textarea>
    </div>
  );
};

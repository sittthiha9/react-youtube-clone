export const getTitle = (videoUrl: string): string => {
  let title = videoUrl?.replace("https://www.pexels.com/video/", "");
  let parts = title?.split("-");
  let trimmedParts = parts?.slice(0, -1);
  let finalTitle = trimmedParts?.join(" ");
  return finalTitle?.charAt(0)?.toUpperCase() + finalTitle?.slice(1);
};
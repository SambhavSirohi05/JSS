// Utility function to convert URLs in text to clickable links
export const parseLinksToJSX = (text, isDark = false) => {
  if (!text) return text;

  // URL regex pattern that matches http/https URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Split text by URLs and process each part
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    // If this part is a URL, make it a clickable link
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className={`underline break-all ${
            isDark
              ? 'text-purple-400 hover:text-purple-300'
              : 'text-blue-600 hover:text-blue-800'
          }`}
        >
          {part}
        </a>
      );
    }
    // Otherwise, return the text as is
    return part;
  });
};

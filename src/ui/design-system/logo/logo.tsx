interface Props {
  size?: "very-small" | "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {
  let sizeLogo: number;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 61;
      break;
    case "medium":
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 140;
      break;
  }

  return (
    <div>
      <svg
        viewBox="0 0 48 48"
        width={sizeLogo}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h48v48H0z" fill="none" />
        <path d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM15.51 32.49l-2.83 2.83C9.57 32.19 8 28.1 8 24c0-4.1 1.57-8.19 4.69-11.31l2.83 2.83C13.18 17.85 12 20.93 12 24c0 3.07 1.17 6.15 3.51 8.49zM24 32c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm11.31 3.31l-2.83-2.83C34.83 30.15 36 27.07 36 24c0-3.07-1.18-6.15-3.51-8.49l2.83-2.83C38.43 15.81 40 19.9 40 24c0 4.1-1.57 8.19-4.69 11.31zM24 20c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
      </svg>
    </div>
  );
};

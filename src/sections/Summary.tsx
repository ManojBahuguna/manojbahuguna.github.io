/** only shown when printing */
export function Summary() {
  return (
    <div className="bg-darkPrimary bg-opacity-70 text-white hidden print:block">
      <div className="container">
        <h2 className="font-bold text-xl mb-1">Summary</h2>
        <p className="text-sm font-light text-gray-200">
          I am a seasoned software engineer with a proven track record of
          developing and maintaining web, mobile, AI and IoT applications.
          <br />
          I am passionate about learning, researching, creating, and innovating
          in the software development arena, and have a strong background in
          leading and mentoring tech teams.
          <br /> With great capacity to adapt to different technologies and
          frameworks, I am always eager to embrace new challenges and develop
          innovative solutions.
        </p>
      </div>
    </div>
  );
}

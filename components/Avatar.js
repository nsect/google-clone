/* eslint-disable @next/next/no-img-element */

function Avatar({url, className}) {
  return (
    <img className={`h-10 cursor-pointer rounded-full transition duration-150 transform hover:scale-110 ${className}`} alt="profile-pic" src={url} loading="lazy" />
  );
}
export default Avatar
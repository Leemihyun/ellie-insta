import React from "react";

type Props = {
  image?: string | null;
};

export default function Avatar({ image }: Props) {
  return (
    <div>
      <img
        className="w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer" // prevent img xBox
      ></img>
    </div>
  );
}

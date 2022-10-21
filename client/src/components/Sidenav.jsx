import React from "react";
import {
  ChatBubbleBottomCenterIcon,
  VideoCameraIcon,
  GlobeAltIcon,
  MusicalNoteIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const ICONWIDTH = 25;

function SideNav() {
  return (
    <div className="drawer-side side-nav bg-teal-300">
      <label
        htmlFor="my-drawer-2"
        className="drawer-overlay bg-teal-300"
      ></label>
      <ul className="menu p-2 overflow-y-auto w-78 text-base-content">
        <li>
          <a>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="pfp" />
              </div>
            </div>
          </a>
        </li>
        <hr />
        <li>
          <a href="">
            <GlobeAltIcon />
          </a>
        </li>
        <li>
          <a href="/chat">
            <ChatBubbleBottomCenterIcon width={ICONWIDTH} />
          </a>
        </li>
        <li>
          <a href="/video">
            <VideoCameraIcon width={ICONWIDTH} />
          </a>
        </li>
        <li>
          <a href="/music">
            <MusicalNoteIcon width={ICONWIDTH} />
          </a>
        </li>
        <li>
          <a href="/calendar">
            <CalendarDaysIcon width={ICONWIDTH} />
          </a>
        </li>
        <li>
          <a href="/settings">
            <Cog6ToothIcon width={ICONWIDTH} />
          </a>
        </li>
        <li>
          <a href="logout">
            <ArrowLeftOnRectangleIcon width={ICONWIDTH} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;

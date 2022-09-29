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
    <div className="drawer-side side-nav bg-base-300">
      <label htmlFor="my-drawer-2" className="drawer-overlay" ></label>
      <ul className="menu p-2 overflow-y-auto w-78 bg-base-300 text-base-content">
        <li>
          <a>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" />
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
          <a href="">
            <ChatBubbleBottomCenterIcon width={ICONWIDTH} />
          </a>
        </li>
        <li>
          <a href="">
            <VideoCameraIcon width={ICONWIDTH} />
          </a>
        </li>
        <li>
          <a href="">
            <MusicalNoteIcon width={ICONWIDTH} />
          </a>
        </li>
        <li>
          <a href="">
            <CalendarDaysIcon width={ICONWIDTH} />
          </a>
        </li>
        <li>
          <a href="">
            <Cog6ToothIcon width={ICONWIDTH} />
          </a>
        </li>
        <li>
          <a href="">
            <ArrowLeftOnRectangleIcon width={ICONWIDTH} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;

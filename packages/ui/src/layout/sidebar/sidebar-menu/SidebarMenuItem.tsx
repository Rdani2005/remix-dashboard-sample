import clsx from "clsx";
import React, { FC } from "react";
import { Link } from "@remix-run/react";

interface Props {
  to: string;
  title: string;
  hasBullet?: boolean;
  isActive?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const SidebarMenuItem: FC<Props> = ({
  title,
  to,
  isActive = false,
  hasBullet = false,
  icon,
  children,
}) => {
  return (
    <div className="menu-item">
      <Link
        className={clsx("menu-link without-sub", { active: isActive })}
        to={to}
      >
        {hasBullet && (
          <span className="menu-bullet">
            <span className="bullet bullet-dot"></span>
          </span>
        )}
        {icon && <span className="menu-icon">{icon}</span>}
        <span className="menu-title">{title}</span>
      </Link>
      {children}
    </div>
  );
};

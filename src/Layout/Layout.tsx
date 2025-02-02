// import React from "react";
import { useEffect, useState } from "react";
// import DockComponent from "../Components/Dock/Dock";
import Header from "../Components/Header/Header";
import SideMenu from "../Components/SideMenu/SideMenu";
import FeedbackDialog from "../Components/FeedbackDialog/FeedbackDialog";
// import ShowAllAppsComponent from "../Components/ShowAllAppsComponent/ShowAllAppsComponent";
// import SettingsDialog from "../Components/SettingsDialog/SettingsDialog";

const Layout = ({ children }: { children: any }) => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
  const [showFeedbackDialog, setShowFeedbackDialog] = useState<boolean>(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="w-full h-full bg-color1 relative">
      <div className="w-full h-full flex flex-col md:flex-row">
        <Header setShowSideMenu={setShowSideMenu} />
        <div
          className={`w-full md:w-[calc(100%-64px)] h-[calc(100%-56px)] md:h-full transition-all duration-1000 transform ${
            showContent
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          {children}
        </div>
      </div>

      <SideMenu
        showSideMenu={showSideMenu}
        setShowSideMenu={setShowSideMenu}
        showFeedbackDialog={showFeedbackDialog}
        setShowFeedbackDialog={setShowFeedbackDialog}
      />
      <FeedbackDialog
        showFeedbackDialog={showFeedbackDialog}
        setShowFeedbackDialog={setShowFeedbackDialog}
      />
    </div>
  );
};

export default Layout;

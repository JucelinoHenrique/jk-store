import React, { useState } from "react";
import { ContainerFlex } from "../../styles";
import { TabMenuContainer, TabMenuItem } from "./styles";

const TabMenu = ({ tabs, onChangeTab }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs) return null;

  return (
    <ContainerFlex>
      <TabMenuContainer>
        {tabs?.map((tab, index) => (
          <TabMenuItem
            key={index}
            onClick={() => {
              setActiveTab(index);
              onChangeTab(tab, index);
            }}
            active={activeTab === index}
          >
            {tab}
          </TabMenuItem>
        ))}
      </TabMenuContainer>
    </ContainerFlex>
  );
};

export default TabMenu;

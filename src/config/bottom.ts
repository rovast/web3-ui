// 定义底部按钮
export const BottomItems: BottomItems = {
  org: {
    title: "STC Community",
    description:
      "The STC Council of the weelink web3 foundation, let us build global DPaaS open source infrastructure together.",
    github: "https://github.com/stc-community",
    twitter: "https://twitter.com/lb_icefirelabs",
    discord: "https://discord.com/",
    youtube: "https://www.youtube.com/@stc6277"
  },
  menus: [
    {
      title: "Get Started",
      items: [
        {
          title: "Create an Account",
          url: "/create"
        },
        { title: "HTTP API", url: "/http-api" },
        { title: "Documentation", url: "/docs" }
      ]
    },
    {
      title: "Echosystems",
      items: [
        {
          title: "STC-DPKI",
          url: "https://github.com/stc-community/stc-dpki",
          external: true
        }
      ]
    }
  ]
};

interface BottomItems {
  org: {
    title: string;
    description?: string;
    github?: string;
    twitter?: string;
    discord?: string;
    youtube?: string;
  };
  menus: MenuItem[];
}

// 菜单列
interface MenuItem {
  title: string;
  items: Item[];
}

interface Item {
  title: string; // 菜单名称
  url: string; // 跳转的链接
  external?: boolean; // 是否为外链，默认是 false
}

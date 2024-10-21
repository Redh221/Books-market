import MyButton from "./Button";
import BackGround from "../../assets/background.jpg";

// export default {
//   title: "UI/Button",
//   component: MyButton,
//   argTypes: {
//     settings: {
//       control: {
//         type: "object",
//       },
//       defaultValue: { type: "button", size: "small" },
//     },

//     preset: {
//       type: "string",
//       description: "preset test",
//       // defaultValue: "",
//       options: ["none", "iconText", "iconImg"],
//       control: {
//         type: "inline-radio",
//       },
//     },
//   },
// };

// const Template = (arg) => <MyButton {...arg}></MyButton>;
// export const Default = Template.bind({});
// Default.args = {
//   children: "Roma ne typoi",
//   settings: { size: "large", color: "brick" },
// };

export default {
  title: "UI/Button",
  component: MyButton,
  argTypes: {
    preset: {
      type: "string",
      description: "preset test",
      options: ["iconImg", "iconText"],
      // control: {
      //   type: "radio",
      // },
      required: false,
    },
    type: {
      type: "string",
      description: "preset test",
      options: ["icon", "button", "link"],
      control: {
        type: "radio",
      },
      required: false,
    },

    size: {
      type: "string",
      description: "preset test",
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
      required: false,
    },

    font: {
      type: "string",
      description: "preset test",
      options: ["extraLarge", "medium", "large", "small"],
      control: {
        type: "radio",
      },

      required: false,
    },
    shape: {
      type: "string",
      description: "preset test",
      options: ["sharp", "smooth", "round"],
      control: {
        type: "radio",
      },
      required: false,
    },
    color: {
      type: "string",
      description: "preset test",
      options: ["glass", "grey", "brick", "metallic"],
      control: {
        type: "radio",
      },
      required: false,
    },
    shadow: {
      type: "string",
      description: "preset test",
      options: ["black", "white", false],
      control: {
        type: "radio",
      },
      required: false,
    },

    textShadow: {
      type: "string",
      description: "preset test",
      options: ["black", "white", false],
      control: {
        type: "radio",
      },
      required: false,
    },

    // type: {
    //   control: {
    //     type: "radio",
    //     options: ["button", "icon", "link"],
    //   },
    //   defaultValue: "button",
    // },
  },
};

const Template = (args) => {
  const settings = {};

  args.type ? (settings.type = args.type) : null;
  args.size ? (settings.size = args.size) : null;
  args.font ? (settings.font = args.font) : null;
  args.shape ? (settings.shape = args.shape) : null;
  args.color ? (settings.color = args.color) : null;
  args.shadow ? (settings.shadow = args.shadow) : null;
  args.textShadow ? (settings.textShadow = args.textShadow) : null;
  return (
    <div
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "top left",
        width: "80vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif",
      }}
      className="vova"
    >
      <MyButton settings={settings} preset={args.preset}>
        {args.children}
      </MyButton>
    </div>
  );
};

export const Default = Template.bind({});
export const IconImg = Template.bind({});
export const IconText = Template.bind({});
Default.args = { children: "Button" };
IconImg.args = {
  preset: "iconImg",
};
IconText.args = {
  children: "R",
  preset: "iconText",
};

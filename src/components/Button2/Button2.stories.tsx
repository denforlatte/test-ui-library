import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button2, { Button2Props } from "./Button2";

export default {
  title: "Components/Button2",
  component: Button2,
} as Meta;

const Template: Story<Button2Props> = (args) => <Button2 {...args} />;

export const Default = Template.bind({});
Default.args = { label: "Click me!" };

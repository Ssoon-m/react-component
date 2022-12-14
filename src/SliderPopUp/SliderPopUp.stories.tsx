import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// testing
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SliderPopUp from './SliderPopUp';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SliderPopUp',
  component: SliderPopUp,
} as ComponentMeta<typeof SliderPopUp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SliderPopUp> = (args) => (
  <SliderPopUp {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicSliderPopUp = Template.bind({});
BasicSliderPopUp.args = {
  popUpContents: [
    {
      id: '232412423423',
      imgSrc: require(`../images/image1.png`),
      contents: '블록 형태의 기능을<br/>쉽게 넣고 뺄 수 있습니다.1',
    },
    {
      id: '232412422gsd23',
      imgSrc: require(`../images/image2.png`),
      contents: '블록 형태의 기능을<br/>쉽게 넣고 뺄 수 있습니다.2',
    },
    {
      id: '215412423123',
      imgSrc: require(`../images/image3.png`),
      contents: '블록 형태의 기능을<br/>쉽게 넣고 뺄 수 있습니다.3',
    },
  ],
};

BasicSliderPopUp.play = async ({ canvasElement }) => {
  // within에 대해
  // https://testing-library.com/docs/dom-testing-library/api-within
  const canvas = within(canvasElement);
  const nextButton = canvas.getByText(/다음/gi);
  await userEvent.click(nextButton);
  const mainWrapper = canvas.getByTestId('mainWrapper');
  const contentsWrapper2 = canvas.getByTestId('contentsWrapper2');
  await waitFor(() =>
    expect(mainWrapper).toHaveStyle(
      `transform: matrix(1, 0, 0, 1, -${contentsWrapper2.offsetLeft}, 0)`
    )
  );
};

import React from 'react'
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Review from './Review';
import { useScale } from '../context/ScaleContext';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  // '& .MuiTabs-indicatorSpan': {
  //   maxWidth: 40,
  //   width: '100%',
  //   backgroundColor: '#efcdab', // This is for the line underneath
  // },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.7)',
    '&.Mui-selected': {
      color: '#111',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

export default function InfoCard() {
  const [value, setValue] = React.useState(0);
  const { handleMouseEnter, handleMouseLeave } = useScale();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabContent = [
    <div className='overview flex flex-col gap-[1rem] pt-5'>
      <div className='rating bg-[#efcdab] w-[4rem] h-[5rem] py-6 ml-10 rounded-2xl'>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="rating-val -mt-[70%] ml-[30%] text-[#494444] font-semibold text-[3rem]">
          4.9
        </div>
      </div>
      <div className="overview-content flex flex-col pt-2 gap-5">
        <Review />
        <Review />
      </div>
      <div className="down-arrow flex w-full justify-center">
        <div className="down-arrow-box w-fit bg-[#efcdab] p-3 rounded-full">
          <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[2rem]' src="../assets/right-arrow.svg" alt="" />
        </div>
      </div>
    </div>
    ,
    <div>Ingredients Content</div>,
  ];

  return (
    <div className="info-card w-fit transform scale-[0.8] rounded-[20px] absolute right-10 bottom-10 overflow-hidden">
        <Box sx={{ width: '100%'}}>
            <Box sx={{ bgcolor: '#fff'}}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                >
                    <StyledTab label="Overview" />
                    {/* <StyledTab label="Ingredients" /> */}
                </StyledTabs>
                <Box sx={{ paddingY: 1, paddingX: 3 }}>
                  {tabContent[value]}
                </Box>
            </Box>
        </Box>
    </div>
  );
}
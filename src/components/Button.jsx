

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const CustomButton = ({ children, onClick, color = 'primary', disabled = false }) => (
  <Button
    onClick={onClick}
    variant="contained"
    color={color}
    disabled={disabled}
    className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md shadow-md"
  >
    {children}
  </Button>
);

// Prop types for validation
CustomButton.propTypes = {
  children: PropTypes.node.isRequired,  // The content inside the button
  onClick: PropTypes.func,               // Function to call on button click
  color: PropTypes.oneOf(['primary', 'secondary']), // MUI color options
  disabled: PropTypes.bool,               // Disable button flag
};

// Default props
CustomButton.defaultProps = {
  color: 'primary',                       // Default color
  disabled: false,                        // Not disabled by default
};

export default CustomButton;

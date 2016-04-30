import React, { PropTypes } from 'react';

const ReactLogo = ({ style }) => (
  <svg style={style} viewBox="0 0 563 500" version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="react" fill="#00D8FF">
          <circle id="Oval" cx="281.529" cy="249.628" r="50.167"></circle>
          <path d="M281.529,159.628 C346.346562,159.628 407.919462,168.766353 454.729834,184.881447 C506.718064,202.77881 538.43,229.239701 538.43,249.628 C538.43,271.345519 504.181902,299.540055 448.572819,317.96497 C404.301723,332.63311 345.069498,340.628 281.529,340.628 C214.778108,340.628 154.877762,332.788897 111.120282,317.832017 C83.7260149,308.46862 61.1031002,296.30006 45.5967325,283.020732 C31.6627729,271.087981 24.628,259.240654 24.628,249.628 C24.628,229.171122 55.1265453,203.077771 105.993559,185.343067 C152.823512,169.01711 215.903449,159.628 281.529,159.628 L281.529,159.628 Z M281.529,135.628 C213.353897,135.628 147.631977,145.410355 98.0927071,162.68084 C38.6132382,183.418262 0.628,215.916933 0.628,249.628 C0.628,284.445464 41.4058366,319.366749 103.357838,340.542024 C149.924994,356.459289 212.343947,364.628 281.529,364.628 C347.465182,364.628 409.189245,356.296774 456.121142,340.747043 C520.526175,319.407771 562.43,284.910706 562.43,249.628 C562.43,215.795077 523.21936,183.07716 462.542111,162.188534 C413.062603,145.154553 348.874063,135.628 281.529,135.628 L281.529,135.628 Z"></path>
          <path d="M203.131253,204.916891 C235.511904,148.768231 274.188512,99.9944781 311.533764,67.4941176 C353.009783,31.3994635 391.774502,17.1473018 409.43629,27.3323574 C428.249756,38.1814456 435.564909,81.935746 423.744815,139.311712 C414.334311,184.990546 391.669338,240.295895 359.926701,295.339188 C326.579861,353.163867 289.865059,401.136796 255.047511,431.571086 C233.250813,450.624465 211.407895,464.142855 192.157837,470.941436 C174.859903,477.050581 161.082354,477.225912 152.754664,472.423616 C135.033769,462.203715 127.666346,422.748845 137.715363,369.824507 C146.96635,321.102314 170.345466,261.768552 203.131275,204.916852 L203.131253,204.916891 Z M182.340725,192.927148 C148.281197,251.98752 123.922833,313.806509 114.13663,365.347527 C102.386258,427.232254 111.56224,476.372527 140.764955,493.214164 C170.927554,510.607908 221.55,492.72948 270.842657,449.640767 C307.895764,417.252358 346.154363,367.262245 380.717281,307.328842 C413.656691,250.210284 437.275115,192.578397 447.251178,144.154325 C460.940983,77.7025872 451.990588,24.1673721 421.425665,6.54161693 C392.117307,-10.3596873 344.186413,7.26249258 295.778308,49.3898199 C256.303605,83.7433728 215.984046,134.588995 182.340747,192.927109 L182.340725,192.927148 Z"></path>
          <path d="M203.20627,295.469832 C170.732189,239.374913 147.791886,181.508432 138.285698,132.92279 C127.727802,78.9635638 134.740099,38.2609178 152.38503,28.0463499 C171.180446,17.1651203 212.741125,32.6791201 256.545454,71.5741936 C291.420628,102.539389 328.01525,149.794812 359.850752,204.786206 C393.294225,262.554705 416.520956,318.321869 425.500394,363.686083 C431.122014,392.085543 431.925198,417.760784 428.201434,437.833563 C424.855302,455.87074 418.126445,467.894443 409.806875,472.710705 C392.102295,482.960119 354.239954,469.638713 313.407214,434.501137 C275.81677,402.153755 236.08754,352.266419 203.206192,295.469697 L203.20627,295.469832 Z M182.435808,307.494303 C216.594496,366.497404 257.987674,418.474133 297.752803,452.692877 C345.498901,493.779567 392.655932,510.371197 421.831169,493.48127 C451.96429,476.03698 461.756811,423.25084 449.04359,359.025836 C439.487596,310.748852 415.284247,252.636838 380.621228,192.76176 C347.58548,135.697106 309.451346,86.4536788 272.48034,53.627623 C221.747172,8.58024129 170.895759,-10.4018549 140.3607,7.2758063 C111.080253,24.2261193 102.409803,74.5534621 114.732315,137.531277 C124.780535,188.887215 148.695339,249.211857 182.43573,307.494168 L182.435808,307.494303 Z"></path>
        </g>
    </g>
  </svg>
);

ReactLogo.propTypes = {
  style: PropTypes.object
};

export default ReactLogo;
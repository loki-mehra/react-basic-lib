'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Modal = require('react-modal');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Modal__default = /*#__PURE__*/_interopDefaultLegacy(Modal);

var Button = function (props) {
    return React__default["default"].createElement("button", null, props.label);
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var IdeaIcon = function () { return (React__default["default"].createElement("svg", { width: '30', height: '30', viewBox: '0 0 30 30', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("path", { d: 'M14.4831 0.48999C14.2751 0.48999 14.0908 0.554004 13.9571 0.676807C13.8225 0.800492 13.7493 0.974877 13.7493 1.17447V4.19569C13.7493 4.39529 13.8225 4.56967 13.9571 4.69336C14.0908 4.81616 14.2751 4.88018 14.4831 4.88018C14.6912 4.88018 14.8755 4.81616 15.0091 4.69336C15.1437 4.56967 15.217 4.39529 15.217 4.19569V1.17447C15.217 0.974877 15.1437 0.800492 15.0091 0.676807C14.8755 0.554004 14.6912 0.48999 14.4831 0.48999Z', fill: '#FFDE7C' }),
    React__default["default"].createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M14.4935 6.60437H14.4881C14.1893 6.60437 13.8771 6.60437 13.5631 6.66447C10.1681 7.02543 7.26498 9.71298 6.76973 12.9486L6.76957 12.9498C6.46067 15.1024 7.01724 17.1384 8.3771 18.8136L8.3778 18.8145C9.80753 20.5443 10.5254 22.4983 10.5379 24.4506C10.2323 24.7656 10.0516 25.1948 10.0516 25.6792C10.0516 26.089 10.217 26.4926 10.4435 26.7973C10.217 27.1021 10.0516 27.5057 10.0516 27.9155C10.0516 28.93 10.9019 29.7472 11.9399 29.7472H16.9864C18.0244 29.7472 18.8747 28.93 18.8747 27.9155C18.8747 27.5057 18.7093 27.1021 18.4828 26.7973C18.7093 26.4926 18.8747 26.089 18.8747 25.6792C18.8747 25.1857 18.6872 24.813 18.3884 24.4564C18.3988 22.3855 19.1163 20.491 20.3624 19.0541C21.6616 17.6759 22.2796 15.9386 22.2796 14.1445C22.2796 9.95151 18.7534 6.60437 14.4935 6.60437ZM8.23282 13.1635C8.64867 10.5185 10.968 8.38108 13.7718 8.03136C13.8983 8.03075 14.0234 8.01561 14.1403 8.00146L14.1437 8.00105C14.2666 7.98618 14.3807 7.97253 14.4935 7.97253C18.0149 7.97253 20.8135 10.7444 20.8135 14.0857C20.8135 15.5267 20.2772 16.9687 19.3244 18.064C17.9313 19.647 17.135 21.6883 16.9904 23.8475H15.2265V19.8809C15.2546 19.8669 15.2823 19.8521 15.3097 19.8363L17.1841 18.7541C17.6576 18.4807 17.9493 17.9755 17.9493 17.4287V15.2643C17.9493 14.7176 17.6576 14.2123 17.1841 13.939L15.3097 12.8568C14.8362 12.5834 14.2528 12.5834 13.7792 12.8568L11.9049 13.939C11.4313 14.2123 11.1396 14.7176 11.1396 15.2643V17.4287C11.1396 17.9755 11.4313 18.4807 11.9049 18.7541L13.7605 19.8254V23.8475H11.9963C11.8487 21.7425 10.9901 19.7578 9.5446 17.9506L9.54373 17.9495C8.40997 16.5633 7.93504 14.8929 8.23252 13.1653L8.23282 13.1635ZM11.5176 25.6792C11.5176 25.4578 11.701 25.2745 11.9399 25.2745H16.9864C17.2253 25.2745 17.4086 25.4578 17.4086 25.6792C17.4086 25.9006 17.2253 26.0838 16.9864 26.0838H11.9399C11.8552 26.0838 11.7471 26.0409 11.6586 25.9614C11.5712 25.8828 11.5176 25.782 11.5176 25.6792ZM11.5784 27.9155C11.5784 27.6941 11.7618 27.5108 12.0007 27.5108H17.0472C17.2861 27.5108 17.4694 27.6941 17.4694 27.9155C17.4694 28.0183 17.4159 28.1191 17.3285 28.1977C17.24 28.2772 17.1318 28.3202 17.0472 28.3202H12.0007C11.7618 28.3202 11.5784 28.1369 11.5784 27.9155ZM14.5066 14.1165C14.53 14.103 14.5589 14.103 14.5823 14.1165L16.4567 15.1987C16.4802 15.2122 16.4946 15.2373 16.4946 15.2643V17.4287C16.4946 17.4558 16.4802 17.4808 16.4567 17.4943L14.5823 18.5765C14.5589 18.59 14.53 18.59 14.5066 18.5765L12.6322 17.4943C12.6087 17.4808 12.5943 17.4558 12.5943 17.4287V15.2643C12.5943 15.2373 12.6087 15.2122 12.6322 15.1987L14.5066 14.1165Z', fill: '#FFDE7C' }),
    React__default["default"].createElement("path", { d: 'M24.7615 13.6678C24.5447 13.6678 24.3537 13.7378 24.2162 13.8702C24.0782 14.003 24.0039 14.1892 24.0039 14.4017C24.0039 14.6142 24.0782 14.8004 24.2162 14.9332C24.3537 15.0656 24.5447 15.1355 24.7615 15.1355H28.3671C28.5839 15.1355 28.7749 15.0656 28.9124 14.9332C29.0504 14.8004 29.1247 14.6142 29.1247 14.4017C29.1247 13.9551 28.7395 13.6678 28.3671 13.6678H24.7615Z', fill: '#FFDE7C' }),
    React__default["default"].createElement("path", { d: 'M0.811149 13.6678C0.601965 13.6678 0.418158 13.7391 0.2865 13.8725C0.154987 14.0057 0.0852051 14.1911 0.0852051 14.4017C0.0852051 14.6123 0.154987 14.7977 0.2865 14.9309C0.418158 15.0643 0.601965 15.1355 0.811149 15.1355H4.23653C4.67559 15.1355 4.96247 14.7653 4.96247 14.4017C4.96247 14.1911 4.89269 14.0057 4.76118 13.8725C4.62952 13.7391 4.44571 13.6678 4.23653 13.6678H0.811149Z', fill: '#FFDE7C' }),
    React__default["default"].createElement("path", { d: 'M25.0207 4.12457C24.7401 3.82396 24.3095 3.82396 24.0289 4.12457L21.7751 6.53933C21.4991 6.83503 21.4991 7.28106 21.7751 7.57675C21.9149 7.72658 22.1217 7.80221 22.271 7.80221C22.3734 7.80221 22.4645 7.78373 22.5487 7.74363C22.6321 7.70393 22.7021 7.64615 22.7669 7.57675L25.0207 5.16199C25.2967 4.86629 25.2967 4.42026 25.0207 4.12457Z', fill: '#FFDE7C' }),
    React__default["default"].createElement("path", { d: 'M7.41928 21.2039C7.12771 20.9318 6.68787 20.9318 6.39631 21.2039L3.9609 23.477C3.66442 23.7537 3.6639 24.1791 3.96039 24.4558L3.97141 24.4641C4.13553 24.5866 4.29845 24.6594 4.47239 24.6594C4.64633 24.6594 4.8097 24.5872 4.97382 24.4647L7.41928 22.1822C7.71576 21.9055 7.71576 21.4806 7.41928 21.2039Z', fill: '#FFDE7C' }),
    React__default["default"].createElement("path", { d: 'M22.5654 21.2006C22.275 20.9329 21.8375 20.9329 21.5471 21.2006C21.4023 21.3341 21.325 21.5064 21.325 21.6838C21.325 21.8612 21.4023 22.0334 21.5471 22.1669L24.0325 24.4592L24.0436 24.4673C24.2107 24.5906 24.3877 24.6594 24.5649 24.6594C24.7441 24.6594 24.9099 24.589 25.0514 24.4586C25.1766 24.3431 25.2281 24.1642 25.2281 23.9964C25.2281 23.8266 25.1759 23.6434 25.0636 23.5053L25.0579 23.4983L22.5654 21.2006Z', fill: '#FFDE7C' }),
    React__default["default"].createElement("path", { d: 'M5.01877 4.10537C4.71903 3.83035 4.26771 3.83035 3.96797 4.10537C3.81839 4.24261 3.73853 4.41964 3.73853 4.602C3.73853 4.78411 3.81817 4.9609 3.96735 5.09806L6.3602 7.35131L6.36138 7.35241C6.51291 7.49144 6.73309 7.55867 6.88678 7.55867C7.10983 7.55867 7.26531 7.48717 7.41218 7.35241C7.56176 7.21517 7.64163 7.03814 7.64163 6.85578C7.64163 6.67368 7.56199 6.49689 7.41281 6.35973L5.01996 4.10647L5.01877 4.10537Z', fill: '#FFDE7C' }))); };
var CloseIcon = function () { return (React__default["default"].createElement("svg", { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("rect", { x: '4', y: '18.1421', width: '20', height: '2', rx: '1', transform: 'rotate(-45 4 18.1421)', fill: '#C7EAF3' }),
    React__default["default"].createElement("rect", { x: '5.41431', y: '4', width: '20', height: '2', rx: '1', transform: 'rotate(45 5.41431 4)', fill: '#C7EAF3' }))); };
var ThumbUpIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#81C216' : _b;
    return (React__default["default"].createElement("svg", { width: '20', height: '23', viewBox: '0 0 20 23', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.48936 2C8.38748 2 8.29579 2.06182 8.25759 2.15627L5.43017 9.14768C5.01001 10.1866 4.00143 10.8667 2.88076 10.8667H0.75C0.335786 10.8667 0 10.5309 0 10.1167C0 9.70245 0.335786 9.36667 0.75 9.36667H2.88076C3.39016 9.36667 3.8486 9.05755 4.03958 8.58531L6.867 1.5939C7.13438 0.932757 7.7762 0.5 8.48936 0.5H9.77698C11.4966 0.5 12.7944 2.06059 12.4809 3.75141L11.6992 7.96667H16.2613C18.0186 7.96667 19.325 9.59233 18.9469 11.3085L16.8461 20.8418C16.5683 22.1023 15.4512 23 14.1605 23H0.75C0.335786 23 0 22.6642 0 22.25C0 21.8358 0.335786 21.5 0.75 21.5H14.1605C14.7472 21.5 15.2549 21.092 15.3812 20.519L17.482 10.9857C17.6539 10.2056 17.0601 9.46667 16.2613 9.46667H10.7973C10.5745 9.46667 10.3632 9.36756 10.2207 9.19622C10.0782 9.02487 10.0193 8.79903 10.0599 8.57992L11.006 3.47791C11.1485 2.70936 10.5586 2 9.77698 2H8.48936Z', fill: color })));
};
var ThumbDownIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#E91C1C' : _b;
    return (React__default["default"].createElement("svg", { width: '20', height: '23', viewBox: '0 0 20 23', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React__default["default"].createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.48936 21.5C8.38748 21.5 8.29579 21.4382 8.25759 21.3437L5.43017 14.3523C5.01001 13.3134 4.00143 12.6333 2.88076 12.6333H0.75C0.335786 12.6333 0 12.9691 0 13.3833C0 13.7975 0.335786 14.1333 0.75 14.1333H2.88076C3.39016 14.1333 3.8486 14.4424 4.03958 14.9147L6.867 21.9061C7.13438 22.5672 7.7762 23 8.48936 23H9.77698C11.4966 23 12.7944 21.4394 12.4809 19.7486L11.6992 15.5333H16.2613C18.0186 15.5333 19.325 13.9077 18.9469 12.1915L16.8461 2.6582C16.5683 1.39769 15.4512 0.5 14.1605 0.5H0.75C0.335786 0.5 0 0.835787 0 1.25C0 1.66421 0.335786 2 0.75 2H14.1605C14.7472 2 15.2549 2.40804 15.3812 2.981L17.482 12.5143C17.6539 13.2944 17.0601 14.0333 16.2613 14.0333H10.7973C10.5745 14.0333 10.3632 14.1324 10.2207 14.3038C10.0782 14.4751 10.0193 14.701 10.0599 14.9201L11.006 20.0221C11.1485 20.7906 10.5586 21.5 9.77698 21.5H8.48936Z', fill: color })));
};
var CaretDownIcon = function () { return (React__default["default"].createElement("svg", { width: '16', height: '10', viewBox: '0 0 16 10', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React__default["default"].createElement("rect", { x: '1.85791', width: '10.9862', height: '2', rx: '1', transform: 'rotate(45 1.85791 0)', fill: '#C4C4C4' }),
    React__default["default"].createElement("rect", { x: '16', y: '1.41431', width: '10.98', height: '2', rx: '1', transform: 'rotate(135 16 1.41431)', fill: '#C4C4C4' }))); };

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".action-box-card{background:#037b98;border-radius:6px;display:flex;flex-direction:column;font-family:Nunito Sans,sans-serif;font-style:normal;outline:none;padding:1.5em;position:relative;scroll-behavior:smooth}.action-box-card.widget-card{align-items:center;justify-content:center;max-width:390px;text-align:center;width:100%}.action-box-card.question-card{display:flex;flex-direction:column;height:430px;width:600px}.action-box-card .centered{align-items:center;display:flex;justify-content:center;text-align:center}.action-box-card h2,.action-box-card h4{color:#fff;line-height:1.45}.action-box-card h2{font-size:26px;margin-bottom:.5em;margin-top:.75em}.action-box-card h4{font-size:18px;font-weight:600;margin-bottom:1.5em;margin-top:1.5em;text-align:center}.action-box-card .text-content{color:#fff;flex:1;font-size:16px;font-weight:400;line-height:24px;margin:1em 0;min-height:100px;overflow-y:auto;padding-right:20px}.scrollable::-webkit-scrollbar-track{background-color:none;border-radius:none;-webkit-box-shadow:none}.scrollable::-webkit-scrollbar{background-color:none;width:6px}.scrollable::-webkit-scrollbar-thumb{background-color:#555;border-radius:3px;-webkit-box-shadow:inset 0 0 6px #024b5c}.action-box-card button{align-items:center;border:none;border-radius:20px;cursor:pointer;display:flex;justify-content:center}.action-box-card button,.action-box-card select{background:#fff;height:40px;outline:none;padding-left:20px;padding-right:20px}.action-box-card select{-moz-appearance:none;-webkit-appearance:none;appearance:none;border-radius:20px;position:relative;width:100%}.action-box-card select .muted-option,.action-box-card select.empty{color:#989898;font-style:italic}.action-box-card select option{color:#000;font-style:normal;height:40px;padding-bottom:.5em;padding-top:.5em}.action-box-card .select-wrapper{position:relative;width:60%}.action-box-card .select-wrapper .caret{position:absolute;right:1em;top:.75em}.action-box-card .mb{margin-bottom:1em}.action-box-card button+button{margin-left:1em}.action-box-card button.button-yes.selected{background:#81c216;color:#fff}.action-box-card button.button-no.selected{background:#e91c1c;color:#fff}.action-box-card button.link{background:none;color:#fff;font-size:16px;font-weight:400;line-height:24px;text-align:center}.action-box-card .close{color:#c7eaf3;cursor:pointer;position:absolute;right:10px;top:10px}.action-box-modal-overlay{background:rgba(0,0,0,.5);inset:0;position:fixed}.action-box-modal-content,.action-box-modal-overlay{align-items:center;display:flex;justify-content:center}hr.divider{border:none;border-bottom:1px dashed #c7eaf3;width:100%}";
styleInject(css_248z);

var ActionButton = function (_a) {
    var value = _a.value, onSelect = _a.onSelect;
    return (React__default["default"].createElement("div", { className: 'button-wrapper centered mb' },
        React__default["default"].createElement("button", { onClick: function () { return onSelect('Y'); }, className: "button-yes ".concat(value === 'Y' && 'selected') },
            React__default["default"].createElement(ThumbUpIcon, { color: value === 'Y' ? '#ffffff' : '#81C216' }),
            "\u00A0\u00A0Yes"),
        React__default["default"].createElement("button", { onClick: function () { return onSelect('N'); }, className: "button-no ".concat(value === 'N' && 'selected') },
            React__default["default"].createElement(ThumbDownIcon, { color: value === 'N' ? '#ffffff' : '#E91C1C' }),
            "\u00A0\u00A0No")));
};

var ActionSelect = function (_a) {
    var options = _a.options, value = _a.value, placeholder = _a.placeholder, onSelect = _a.onSelect;
    return (React__default["default"].createElement("div", { className: 'centered mb' },
        React__default["default"].createElement("div", { className: 'select-wrapper' },
            React__default["default"].createElement("select", { onChange: function (e) { return onSelect(e.target.value); }, className: "".concat(value === '' && 'empty') },
                React__default["default"].createElement("option", { value: '', className: 'muted-option' }, placeholder || 'Please select...'),
                options.map(function (option) { return (React__default["default"].createElement("option", { value: option.value, selected: option.value === value }, option.name)); })),
            React__default["default"].createElement("div", { className: 'caret' },
                React__default["default"].createElement(CaretDownIcon, null)))));
};

var ActionCard = function (_a) {
    var onClose = _a.onClose, currentData = _a.currentData, onNext = _a.onNext;
    var _b = React.useState({}), cardData = _b[0], setCardData = _b[1];
    var _c = React.useState(''), selected = _c[0], setSelected = _c[1];
    React.useEffect(function () {
        setCardData(__assign({}, currentData));
        setSelected('');
    }, [currentData.id]);
    var handleNextClick = function () {
        if (!cardData.skippable && cardData.type != 'text' && !selected) {
            return;
        }
        if (cardData.hasNext) {
            onNext(cardData.nextId);
        }
        else {
            onNext(null);
        }
    };
    var handleValueSelect = function (newValue) {
        setSelected(newValue);
    };
    var getButtonText = function () {
        if (cardData.skippable && !selected) {
            return 'Skip';
        }
        if (cardData.hasNext) {
            return 'Next';
        }
        if (cardData.type === 'text') {
            return 'Close';
        }
        return 'Save & Close';
    };
    var getButtonClass = function () {
        if (cardData.skippable && !selected) {
            return 'link';
        }
        if (cardData.type === 'text' && !cardData.hasNext) {
            return 'link';
        }
        return '';
    };
    var getDescriptionText = function () {
        if (selected && cardData.answerDescription) {
            return cardData.answerDescription[selected];
        }
        return cardData.description || React__default["default"].createElement("span", null, "\u00A0");
    };
    var renderFormType = function () {
        var type = cardData.type;
        if (type === 'yes_no') {
            return React__default["default"].createElement(ActionButton, { value: selected, onSelect: handleValueSelect });
        }
        if (type === 'select') {
            return (React__default["default"].createElement(ActionSelect, { value: selected, onSelect: handleValueSelect, options: cardData.options }));
        }
        return React__default["default"].createElement(React__default["default"].Fragment, null);
    };
    return (React__default["default"].createElement("div", { className: 'action-box-card question-card' },
        React__default["default"].createElement("div", { className: 'close', onClick: onClose },
            React__default["default"].createElement(CloseIcon, null)),
        React__default["default"].createElement("div", { className: 'centered' },
            React__default["default"].createElement(IdeaIcon, null)),
        React__default["default"].createElement("h2", null, cardData.question),
        renderFormType(),
        React__default["default"].createElement("hr", { className: 'divider' }),
        React__default["default"].createElement("div", { className: 'text-content scrollable' }, getDescriptionText()),
        React__default["default"].createElement("div", { className: 'button-wrapper centered' },
            React__default["default"].createElement("button", { className: getButtonClass(), onClick: handleNextClick }, getButtonText()))));
};

var dummyData = {
    '0': {
        id: 0,
        question: 'Do you know the risk factors for chronic kidney disease (CKD)?',
        skippable: false,
        type: 'text',
        description: 'This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. This is a long long description to test this widget. ',
        hasNext: true,
        nextId: '1',
    },
    '1': {
        id: 1,
        question: 'Do you know the risk factors for chronic kidney disease (CKD)?',
        skippable: true,
        type: 'yes_no',
        description: '',
        hasNext: true,
        nextId: '2',
        answerDescription: {
            Y: 'Great job getting your labs done! To get more personalized content based on your results, please update your lab data here.',
            N: 'Your Glomerular Filtration Rate (GFR) number tells your doctor how well your kidneys are working. Kidney disease may not cause any symptoms until it is severe so ask your doctor today about checking the health of your kidneys. You can track your number here.',
        },
    },
    '2': {
        id: 2,
        question: 'Do you know the risk factors for chronic kidney disease (CKD)?',
        skippable: true,
        type: 'select',
        options: [
            { value: 'stage-0', name: 'Not Applicable' },
            { value: 'stage-1', name: 'Stage 1' },
            { value: 'stage-2', name: 'Stage 2' },
            { value: 'stage-3', name: 'Stage 3' },
            { value: 'stage-4', name: 'Stage 4' },
        ],
        description: 'This is the a description to show drop-down option and is skippable. Next page will not be select but non-skippable.',
        hasNext: true,
        nextId: '3',
    },
    '3': {
        id: 3,
        question: 'Do you know the risk factors for chronic kidney disease (CKD)?',
        skippable: false,
        type: 'select',
        options: [
            { value: 'stage-0', name: 'Not Applicable' },
            { value: 'stage-1', name: 'Stage 1' },
            { value: 'stage-2', name: 'Stage 2' },
            { value: 'stage-3', name: 'Stage 3' },
            { value: 'stage-4', name: 'Stage 4' },
        ],
        description: 'This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page. This is the a description to show drop-down option and is last page.',
        hasNext: false,
    },
};

var ActionCardWidget = function () {
    var _a = React.useState(false), isOpen = _a[0], setOpen = _a[1];
    var _b = React.useState(null), currentData = _b[0], setCurrentData = _b[1];
    var fetchQuestion = function (id) {
        if (!id) {
            setOpen(false);
        }
        // API call to fetch
        setCurrentData(dummyData[id]);
    };
    React.useState(function () {
        fetchQuestion('0');
    }, []);
    var handleOpenModal = function () {
        setOpen(true);
    };
    var handleCloseModal = function () {
        setOpen(false);
    };
    var handleNextClick = function (nextId) {
        fetchQuestion(nextId);
    };
    return currentData ? (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: 'action-box-card widget-card' },
            React__default["default"].createElement(IdeaIcon, null),
            React__default["default"].createElement("h4", null, currentData.question),
            React__default["default"].createElement("button", { className: 'link', onClick: handleOpenModal }, "Read more")),
        React__default["default"].createElement(Modal__default["default"], { isOpen: isOpen, onRequestClose: handleCloseModal, shouldCloseOnOverlayClick: true, shouldCloseOnEsc: true, contentLabel: 'Action-Box Modal', overlayClassName: 'action-box-modal-overlay', className: 'action-box-modal-content' },
            React__default["default"].createElement(ActionCard, { onClose: handleCloseModal, currentData: currentData, onNext: handleNextClick })))) : (React__default["default"].createElement(React__default["default"].Fragment, null));
};

exports.ActionCard = ActionCard;
exports.ActionCardWidget = ActionCardWidget;
exports.Button = Button;
//# sourceMappingURL=index.js.map

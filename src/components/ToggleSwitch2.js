import React, {useState} from "react";

const ToggleSwitch2 = () => {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => {
        setIsOn(!isOn);
        };
        return (
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div>
            );
}

export default ToggleSwitch2;


export default function ColorChanger() {
    const colors = ["blue", "red", "green", "orange"];
    
    const handleRenderColors = () => {
        return colors.map((color) => {
            return (
                <div
                    id={color}
                    key={color}
                    className={`persian-${color}-Backgroundcolor color`}
                ></div>
            );
        });
    };
    return (
        <div
            className={`common-styles-div color-changer-div persian-blue-div-color`}
        >
            <div className="left-side">{handleRenderColors()}</div>
            <div className="right-side">
                <a
                    href="https://mega.nz/folder/yQ11XJ6a#HKqEfDjBETz9vbxFVvbBMA"
                    target="_blank"
                    rel="noreferrer"
                >
                    ☁️
                </a>
            </div>
        </div>
    );
}

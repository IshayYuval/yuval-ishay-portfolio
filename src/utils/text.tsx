import React from "react";

export const renderTextWithBreaks = (text: string) => {
    if (!text) return null;
    return text.split(/<br\s*\/?>/i).map((part, index, array) => (
        <React.Fragment key={index}>
            {part}
            {index < array.length - 1 && <br />}
        </React.Fragment>
    ));
};

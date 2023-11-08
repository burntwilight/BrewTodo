"use client"

import * as RadixSlider from "@radix-ui/react-slider"

const Slider = ({value = 1, onChange}) => {
    const handleChange = (newValue) => {
        onChange?.(newValue[0])
    }

    return (
        <RadixSlider.Root
            className="
            relative
            flex
            justify-center
            items-center
            select-none
            touch-none
            sm:w-full
            w-24
            h-4
            bg-background
        "
            defaultValue={[1]}
            value={[value]}
            onValueChange={handleChange}
            max={1}
            step={0.01}
            aria-label="Volume"
        >
            <RadixSlider.Track
                className="
                bg-accent
                relative
                grow
                rounded-full
                h-[4px]
            "
            >
                <RadixSlider.Range 
                    className="
                    absolute
                    bg-text
                    rounded-full
                    h-full
                "
                />
            </RadixSlider.Track>
        </RadixSlider.Root>
    )
}

export default Slider
import * as React from 'react'
import * as GaugeChart from 'react-gauge-chart'
import { ControlProps } from '../types/ControlProps'

const Control = ({ context }: ControlProps) => {
	return (
		<>
			<GaugeChart.default
				id="gauge-chart3"
				nrOfLevels={context.parameters.nrOfLevels.raw!}
				colors={["#FF5F6D", "#FFC371"]}
				arcWidth={context.parameters.arcWidth.raw!}
				percent={context.parameters.percent.raw!}
				textColor={context.parameters.textColor.raw!}
				animDelay={context.parameters.animDelay.raw!}
				needleColor={context.parameters.needleColor.raw!}
				needleBaseColor={context.parameters.needleBaseColor.raw!}
				fontSize={context.parameters.fontSize.raw!}
				arcPadding={context.parameters.arcPadding.raw!}
				animateDuration={context.parameters.animateDuration.raw!}
			/>
		</>
	)
}

export default Control
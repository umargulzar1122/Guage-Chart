import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import { createRoot, Root } from 'react-dom/client';
import Control from "./src/Control";

export class GuageChart implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private _container: HTMLDivElement;
    private _context: ComponentFramework.Context<IInputs>;
    private rootControl: Root;

    constructor() {

    }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        this._container = container;
        this._context = context;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this._context = context;
        this._container.style.height = `${context.mode.allocatedHeight - 0}px`;
        this._container.style.width = `${context.mode.allocatedWidth - 0}px`;
        this.renderControl()
    }
    private renderControl() {
        this.rootControl = createRoot(this._container);
        this.rootControl.render(
            React.createElement(Control, {
                context: this._context,
            }),
        );
    }
    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {

    }
}

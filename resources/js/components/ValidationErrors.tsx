import React, {Component} from "react";

interface Props {
    error: string|undefined,
    for: string|undefined
}

class ValidationErrors extends Component<Props>
{
    render() {
        if (this.props.error) {
            return (
                <label className="ml-1.5 text-sm text-red-500" htmlFor={this.props.for}>
                    {this.props.error}
                </label>
            );
        }

        return null;
    }
}

export default ValidationErrors;
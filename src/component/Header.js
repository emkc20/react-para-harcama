import React from 'react'

export default function Header(props) {
    return (
        <>
            
                {props.total > 0 && (
                    <div className="header">
                        Harcayacak <span> {props.para - props.total} $</span>   paranız kaldı !
                    </div>
                )}
                {props.total === 0 && (
                <div className="header">
                        Harcamak için  <span> {props.para} $</span>  paranız var
                    </div>
                )}
                {props.para - props.total === 0 && (
                <div className="header">
                        para kalmadı...
                    </div>
                )}
            
            <style jsx>{`
              .header {
                position: sticky;
                top: 0;
                background: linear-gradient(to bottom, #20b820, #14be2a);
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 24px;
                letter-spacing: 1px;
              }
              .header.empty {
                background: linear-gradient(to bottom, #b82020, #be1414);
              }
              .header span {
                margin: 0 10px;
                font-weight: bold;
              }
			`}</style>
        </>
    )
}

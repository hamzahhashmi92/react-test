import React from 'react'

function Input(props) {
    const { field } = props;
    console.log('props', field)
    switch (field.dataType) {
        case 'int32':
            return(
                <div className={`mb-${field.style.col}`} key={field.id}>
                    <label className="form-label">{field.fieldLabel}</label>
                    <input 
                        className="form-control"
                        datatype={field.dataType}
                        placeholder={field.fieldName}
                        type='number'
                        value={field.value}
                        onChange={()=> null}
                    />
                </div>
            )
        case 'string':
            return(
                <div key={field.id}>
                    <label className="form-label">{field.fieldLabel}</label>
                    <input 
                        placeholder={field.fieldLabel}
                        className="form-control"
                        type='text'
                        value={field.value}
                        datatype={field.dataType}
                        onChange={()=> null}
                    />
                </div>
            )
        case 'dropdown':
            return(
                <select className="form-select" key={field.id}>
                    {
                        field?.masterData.map(option=> {
                            return(
                                <option value={option.id} key={option.id}>{option.name}</option>
                            )
                        })
                    }
                </select>
            )
        case 'date':
            return(
                <div key={field.id}>
                    <label className="form-label">{field.fieldLabel}</label>
                    <input 
                        type='date'
                        datatype={field.dataType}
                    />
                </div>
            )
        case 'time':
            return(
                <div key={field.id}>
                    <label className="form-label">{field.fieldLabel}</label>
                    <input 
                        type='time'
                        datatype={field.dataType}
                    />
                </div>
            )
        default:
            return null
    }
}

export default Input

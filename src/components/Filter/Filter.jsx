import PropTypes from 'prop-types'
// import css from "./Filter.module.css"

export const Filter =({value, onFilterChange})=> {

        return (
            <label>
            Find contacts by name
            <input
              type="text"
              name="filter"
              title="Enter first letters or numbers"
              onChange={onFilterChange}
              value={value}
            />
          </label>
        )
};

Filter.propTypes={
    value:PropTypes.string.isRequired,
    onFilterChange:PropTypes.func.isRequired,
}
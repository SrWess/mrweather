import { AiOutlineSearch } from 'react-icons/ai'

import styles from '../ButtonSearch/btnsearch.module.css'

export default function ButtonSearch() {
  return (
    <div className={styles.inputGroup}>
      <input type="text" name="search" id="search" placeholder="Informe uma cidade"/>
      <button>
        <AiOutlineSearch
          size={20}
        />
      </button>
    </div>
  )
}
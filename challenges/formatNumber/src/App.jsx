import { useMemo, useState } from 'react'

import {
  formatPenceToPounds,
} from './utils/formatNumber.js'

function App() {
  const [penceInput, setPenceInput] = useState('199')

  const menu = useMemo(
    () => [
      {
        name: 'Classic Breakfast',
        description: 'Eggs, toast, and grilled tomatoes.',
        pricePence: 895,
      },
      {
        name: 'Fish & Chips',
        description: 'Beer-battered fish with chips and tartare sauce.',
        pricePence: 1295,
      },
      {
        name: 'Veggie Wrap',
        description: 'Roasted veg, hummus, and salad.',
        pricePence: 775,
      },
      {
        name: 'Apple Pie',
        description: 'Served warm with custard.',
        pricePence: 525,
      },
      {
        name: 'Tea',
        description: 'Builder’s tea. Milk optional.',
        pricePence: 195,
      },
    ],
    [],
  )

  const formattedInputPrice = useMemo(
    () => formatPenceToPounds(penceInput),
    [penceInput],
  )

  return (
    <div className="page">
      <header className="header">
        <div>
          <h1>Seaside Cafe</h1>
          <p className="subhead">Menu prices are stored in pence, displayed in pounds.</p>
        </div>
      </header>

      <main className="layout">
        <section className="panel">
          <h2>Menu</h2>

          <div className="menu">
            {menu.map((item) => (
              <div key={item.name} className="menuItem">
                <div className="menuLeft">
                  <div className="menuName">{item.name}</div>
                  <div className="menuDesc">{item.description}</div>
                </div>
                <div className="menuPrice">{formatPenceToPounds(item.pricePence)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Try it</h2>
          <p className="note">
            Type a price in <strong>pence</strong> and see it formatted as pounds.
          </p>

          <label className="field">
            <span>Pence</span>
            <input
              value={penceInput}
              onChange={(e) => setPenceInput(e.target.value)}
              inputMode="numeric"
              placeholder="e.g. 199"
            />
          </label>

          <div className="outputCard">
            <div className="outputLabel">Formatted price</div>
            <div className="outputValue" aria-live="polite">
              {formattedInputPrice}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

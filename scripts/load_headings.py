import sqlite3
import pandas as pd
import os
from pathlib import Path

xlsx_path = os.path.join(Path(__file__).parent.parent, 'files', 'headings.xlsx')
headings_df = pd.read_excel(xlsx_path, sheet_name='headings')
db_path = os.path.join(Path(__file__).parent.parent, 'db.sqlite3')
con=sqlite3.connect(db_path)
headings_df.to_sql('heading', con, index=False, if_exists="replace")
con.commit()
con.close()
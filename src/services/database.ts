
const DB_CONFIG = {
  host: '69.197.187.126',
  port: 3306,
  user: 'chat_app_copy',
  password: 'HIra1981@1',
  database: 'chat_app_copy'
};

// Base API URL for database operations
const API_BASE_URL = `http://${DB_CONFIG.host}:${DB_CONFIG.port}`;

// Generic database query function
export const executeQuery = async (query: string, params: any[] = []) => {
  try {
    const response = await fetch('/api/database', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        params,
        config: DB_CONFIG
      }),
    });
    
    if (!response.ok) {
      throw new Error('Database query failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
};

// Users API
export const usersAPI = {
  getAll: () => executeQuery('SELECT * FROM users ORDER BY id DESC'),
  getById: (id: number) => executeQuery('SELECT * FROM users WHERE id = ?', [id]),
  create: (userData: any) => executeQuery(
    'INSERT INTO users (name, email, balance, status, created_at) VALUES (?, ?, ?, ?, NOW())',
    [userData.name, userData.email, userData.balance || 0, userData.status || 'active']
  ),
  update: (id: number, userData: any) => executeQuery(
    'UPDATE users SET name = ?, email = ?, balance = ?, status = ? WHERE id = ?',
    [userData.name, userData.email, userData.balance, userData.status, id]
  ),
  delete: (id: number) => executeQuery('DELETE FROM users WHERE id = ?', [id]),
};

// Models API
export const modelsAPI = {
  getAll: () => executeQuery('SELECT * FROM models ORDER BY id DESC'),
  getById: (id: number) => executeQuery('SELECT * FROM models WHERE id = ?', [id]),
  create: (modelData: any) => executeQuery(
    'INSERT INTO models (name, description, price_per_token, status, created_at) VALUES (?, ?, ?, ?, NOW())',
    [modelData.name, modelData.description, modelData.price_per_token, modelData.status || 'active']
  ),
  update: (id: number, modelData: any) => executeQuery(
    'UPDATE models SET name = ?, description = ?, price_per_token = ?, status = ? WHERE id = ?',
    [modelData.name, modelData.description, modelData.price_per_token, modelData.status, id]
  ),
  delete: (id: number) => executeQuery('DELETE FROM models WHERE id = ?', [id]),
};

// Settings API
export const settingsAPI = {
  getAll: () => executeQuery('SELECT * FROM settings'),
  get: (key: string) => executeQuery('SELECT * FROM settings WHERE setting_key = ?', [key]),
  update: (key: string, value: string) => executeQuery(
    'INSERT INTO settings (setting_key, setting_value, updated_at) VALUES (?, ?, NOW()) ON DUPLICATE KEY UPDATE setting_value = ?, updated_at = NOW()',
    [key, value, value]
  ),
};

// Balance Transactions API
export const transactionsAPI = {
  getAll: () => executeQuery('SELECT * FROM balance_transactions ORDER BY created_at DESC'),
  getByUserId: (userId: number) => executeQuery('SELECT * FROM balance_transactions WHERE user_id = ? ORDER BY created_at DESC', [userId]),
  create: (transactionData: any) => executeQuery(
    'INSERT INTO balance_transactions (user_id, amount, type, description, created_at) VALUES (?, ?, ?, ?, NOW())',
    [transactionData.user_id, transactionData.amount, transactionData.type, transactionData.description]
  ),
};

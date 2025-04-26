import axios from './axios';

// GET all ingredients (optional search param)
export const getIngredients = async (search = '') => {
  const response = await axios.get('/ingredients', {
    params: search ? { search } : {},
  });
  return response.data;
};

// GET HPP of a specific ingredient
export const getIngredientHPP = async (id) => {
  const response = await axios.get(`/ingredients/${id}/hpp`);
  return response.data;
};

// GET history of a specific ingredient
export const getIngredientHistory = async (id) => {
  const response = await axios.get(`/ingredients/${id}/history`);
  return response.data;
};

// GET stock report of a specific ingredient
export const getStockReport = async (id) => {
  const response = await axios.get(`/ingredients/${id}/report`);
  return response.data;
};

// GET report for all ingredients
export const getAllIngredientsReport = async () => {
  const response = await axios.get('/ingredients/report/all');
  return response.data;
};

// EXPORT stock report CSV
export const exportStockReportCSV = async () => {
  const response = await axios.get('/ingredients/report/export', {
    responseType: 'blob', // penting untuk file CSV
  });
  return response.data;
};

// GET low stock ingredients
export const getLowStockIngredients = async () => {
  const response = await axios.get('/ingredients/low-stock');
  return response.data;
};

// CREATE new ingredient
export const createIngredient = async (data) => {
  const response = await axios.post('/ingredients', data);
  return response.data;
};

// UPDATE existing ingredient
export const updateIngredient = async (id, data) => {
  const response = await axios.put(`/ingredients/${id}`, data);
  return response.data;
};

// DELETE an ingredient
export const deleteIngredient = async (id) => {
  const response = await axios.delete(`/ingredients/${id}`);
  return response.data;
};

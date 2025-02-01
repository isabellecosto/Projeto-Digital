import { useState, useEffect } from "react";

/**
 * Hook personalizado para usar localStorage com React
 *
 * @template T
 * @param {string} key - A chave para salvar no localStorage
 * @param {T} initialValue - O valor inicial caso não exista no localStorage
 * @returns {{ data: T; save: (value: T) => void; remove: () => void }}
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  /**
   * Valor inicial do estado (se existir no localStorage, usa esse valor)
   *
   * @type {[T, Function]}
   */
  const [data, setData] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  /**
   * Atualiza o valor e salva no localStorage
   *
   * @param {T} value - O valor a ser salvo
   */
  function save(value: T): void {
    setData(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Remove a chave do localStorage e reseta o estado
   */
  function remove(): void {
    localStorage.removeItem(key);
    setData(initialValue);
  }

  /**
   * Monitorando alterações no estado `data` para salvar automaticamente no localStorage
   */
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return { data, save, remove };
}

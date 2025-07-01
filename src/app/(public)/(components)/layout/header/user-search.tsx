import { STYLES } from '@/app/(constants)';
import { buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { ToastShow } from '@/components/ui/toast-container';
import { FriendCard } from '@/components/user/friend-card';
import { getErrorMessage } from '@/generated';
import { useBoolean } from '@/hooks';
import { cn } from '@/lib/utils';
import { SearchUser } from '@/types/user.interfaces';
import { getAllUsers } from '@/utils/api/request/user/getAllUsers';
import { DialogTitle } from '@radix-ui/react-dialog';
import { SearchIcon, X } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export function UserSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchUser[]>([]);
  const [isOpen, setIsOpen] = useBoolean();

  const handleChangeSearchQuery = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value),
    [],
  );

  const fetchUsers = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    try {
      const response = await getAllUsers({ params: { username: searchQuery } });
      setSearchResults(response.data);
    } catch (err) {
      toast.error(getErrorMessage(err));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchUsers(searchQuery), 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleFriendCardClick = () => {
    setIsOpen(false); // Закрываем диалог
    setSearchQuery(''); // Очищаем поисковый запрос
    setSearchResults([]); // Очищаем результаты поиска
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <ToastShow />
      <form>
        <DialogTrigger asChild>
          <SearchIcon
            size='32'
            className={`${cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}${STYLES.HeaderLink.LINK_MENU} px-2`}
          />
        </DialogTrigger>
        <DialogContent
          className='sm:max-w-2xl border-stone-800'
          style={{ background: '#09090b' }}
        >
          <DialogHeader>
            <DialogTitle>
              <Input
                placeholder='Поиск'
                className='focus-visible:ring-0 focus-visible:ring-offset-0 '
                value={searchQuery}
                onChange={handleChangeSearchQuery}
              />
            </DialogTitle>
          </DialogHeader>
          <Tabs defaultValue='quick' className='mt-4'>
            <TabsContent value='quick' className='py-4'>
              {searchResults.length > 0 && (
                <div className='max-h-60 overflow-y-auto'>
                  {searchResults.map((user) => (
                    <div
                      key={user.username}
                      onClick={handleFriendCardClick}
                      className='cursor-pointer'
                    >
                      <FriendCard friend={user} />
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </DialogContent>
      </form>
    </Dialog>
  );
}
